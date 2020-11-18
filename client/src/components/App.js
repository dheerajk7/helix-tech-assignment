import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AddCourse from './AddCourse';
import AddTopic from './AddTopic';
import CourseDetail from './CourseDetail';
import Home from './Home';
import TopicDetail from './TopicDetail';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/add-course/" component={AddCourse}></Route>
          <Route exact path="/add-topic/" component={AddTopic}></Route>

          <Route
            exact
            path="/course/:course_id"
            component={CourseDetail}
          ></Route>
          <Route exact path="/topic/:topic_id" component={TopicDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
