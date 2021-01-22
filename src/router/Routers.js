import { Result } from 'antd';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import HomeScreen from '../views/HomeScreen';
import QuizQuestionView from '../views/QuizQuestionView';
import Results from '../views/Results'
export default function Routers() {
  return (
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/Question" component={QuizQuestionView} />
      <Route path="/Review" component={Results} />
    </Switch>
  )
}
