import React from 'react';
import './App.css';
import {Card, Grid} from "semantic-ui-react";
import DivWithPadding from "./StyledComponents/DivWithPadding";
import {withHighcharts} from "react-jsx-highcharts";
import Highcharts from 'highcharts/highstock';
import Example from "./Example";
import Map from "./Map";

function App() {
    return (
        <div className="App">
            <DivWithPadding>
                <Map/>
            </DivWithPadding>
            <DivWithPadding>
                <Grid columns={2}>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='ChickPea'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='PigeonPea'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='Groundnut'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='Sorghum'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='Pearl Millet'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='Finger Millet'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='Bean'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='Cowpea'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Card fluid>
                            <Card.Content header='Soybean'/>
                            <Card.Content>
                                <Example/>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                </Grid>
            </DivWithPadding>

        </div>
    );
}

export default withHighcharts(App, Highcharts);
