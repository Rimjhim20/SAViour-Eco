import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "@tensorflow/tfjs-backend-cpu";
import "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const ImageDetectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageContainer = styled.div`
  min-width: 300px;
  height: 545px;
  border: 4px solid #000001;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top:15px;
`;
const TargetImg = styled.img`
  height: 100%;
`;
const HiddenFileInput = styled.input`
  display: none;
`;
const SelectButton = styled.button`
  padding: 7px 10px;
  border: 2px solid transparent;
  background-color: #fff;
  color: #0a0f22;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  margin-top: 2em;
  cursor: pointer;
  transition: all 260ms ease-in-out;

  &:hover {
    background-color: #6a4bcd;
    border: 2px solid #fff;
    color: #fff;
  }
`;

const TargetBox = styled.div`
position:absolute;
left: ${({x})=> x + "px"};
top: ${({y})=> y + "px"};
width: ${({width})=> width+"px"};
height: ${({height})=> height +"px"};
border: 3px solid #82EC31;
background-color:transparent;
z-index:20;

&::before{
  content: "${({classType,score})=> `${classType} ${score.toFixed(1)}%`}";
  color:#FE8801;
  font-weight:500;
  font-size:17px;
  postion:absolute;
  top:-1.5em;
  left:-5px;

}
`


function ImageClassification(props) {
  const [imgData, setImgData] = useState(null);
  const fileInputRef = useRef();
  const imageRef = useRef();
  const[loading,setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const isEmptyPredictions = !predictions || predictions.length === 0

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const normalizePrediction = (predictions, imgSize)=>{
    if(!predictions || !imgSize ||!imageRef) return predictions|| [];
    return predictions.map((prediction)=>{
      const {bbox} = prediction;
      const oldX = bbox[0];
      const oldY = bbox[1];
      const oldWidth = bbox[2];
      const oldHeight = bbox[3];
      const imgWidth = imageRef.current.width;
      const imgHeight = imageRef.current.height;

      const x = (oldX * imgWidth)/imgSize.width;
      const y = (oldY * imgHeight)/imgSize.height;
      const width = (oldWidth *imgWidth)/imgSize.width;
      const height = (oldHeight *imgHeight)/imgSize.height;

      return {...prediction, bbox:[x,y,width,height]};
    })
  }
const detectObjectsinImage = async (imageElement, imgSize) =>{
    const model = await cocoSsd.load({  });
    const predictions = await model.detect(imageElement,5);
    const normalizedPredictions = normalizePrediction(predictions,imgSize)
    setPredictions(normalizedPredictions);
    console.log("Predictions: ", predictions);
}

  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader();
      fileReader.onload = () => rs(fileReader.result);
      fileReader.onerror = () => rj(fileReader.error);
      fileReader.readAsDataURL(file);
    });
  };
  const onSelectImage = async (e) => {
    setPredictions([]);
    setLoading(true);
    const file = e.target.files[0];
    const imgData = await readImage(file);
    setImgData(imgData);
    const imageElement = document.createElement("img");
    imageElement.src = imgData;
    imageElement.onload = async()=>{
      const imgSize = {width:imageElement.width, height:imageElement.height};
        await detectObjectsinImage(imageElement, imgSize);
        setLoading(false);
    }
  };

  return (
    <ImageDetectorContainer>
      <ImageContainer>
        {imgData && <TargetImg src={imgData} alt='img' ref={imageRef}/>  }
        {!isEmptyPredictions && predictions.map((prediction,index)=>(
          <TargetBox
              key = {index}
              x = {prediction.bbox[0]}
              y = {prediction.bbox[1]}
              width = {prediction.bbox[2]}
              height = {prediction.bbox[3]}
              classType={prediction.class}
              score = {prediction.score * 100}/>
        ))}
      </ImageContainer>
      <HiddenFileInput type="file" ref={fileInputRef} onChange={onSelectImage} />
      <SelectButton onClick={openFilePicker}>{loading ? "Recognizing...":"Select Image"}</SelectButton>
    </ImageDetectorContainer>
  );
}

export default ImageClassification;
