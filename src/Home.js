import React, { Fragment } from 'react';
import {
  Container, Row, Col, Button, Card, CardImg, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import PIC from './assets/26720.jpg';
import BANNER from './assets/boy.jpg';
const Home = () => {
  return (
    <>
      <Fragment>
        <main className=" ">
          <Container className="px-0">
            <Row noGutters className="position-relative">
              <Col xs={{ order: 1 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                <Card>
                  <CardImg top width="100%" src={BANNER} alt="banner" />
                  <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary"> "Preparing for Nature's Fury: Disaster Management"</CardTitle>
                    <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
                      A natural disaster management system (NDMS) is a comprehensive approach to preparing for and responding to natural disasters such as hurricanes, floods, tornadoes, earthquakes, and wildfires.
                      An effective NDMS should include the following features:

                      Safety Tips: The NDMS should provide clear and concise information on what actions to take before, during, and after a natural disaster, such as how to prepare an emergency kit, how to evacuate safely, and how to protect oneself from injuries.

                      Notifications: The NDMS should have a robust system for sending out alerts and warnings to the public, using a variety of communication channels such as text, email, and social media.

                      Multi-Language Support: The NDMS should be able to provide information in multiple languages to ensure that all members of the community have access to important information.

                      Location Information: The NDMS should provide detailed information on the location of natural disasters, including maps and satellite imagery, to help people understand the extent of the disaster and the areas that are most affected.

                      Emergency Contact Numbers: The NDMS should provide a list of emergency contact numbers, such as the numbers for local emergency services and the National Weather Service, so that people can get help quickly.

                      Routes and Shelter Information: The NDMS should provide information on evacuation routes and shelter locations, so that people can get to safety quickly and easily.

                      Resources and Support: NDMS should also include resources and support mechanisms to help people cope with the aftermath of a natural disaster, such as counseling services, financial assistance, and rebuilding assistance.

                    </CardText>
                    <Button color="primary" >
                      <a href="/trello" className="font-weight-bold text-decoration-none text-white">
                        Safety Tips
                      </a>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                <h1>SaFe-HaVeN</h1>
                <p>"Nature's wrath can be devastating, but with a well-planned natural disaster management system in place, we can minimize the damage."</p>

                <CardImg top width="50%" height="80%" src={PIC} alt="banner" />

              </Col>
            </Row>
          </Container>
        </main>
      </Fragment>

    </>
  )
}

export default Home