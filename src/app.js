import React from 'react';
import ReactDOM from 'react-dom';
import { NCE2 } from './data/NCE2_utf8.js';
//import './style.css';
import { LessonList } from './lesson_list.js';
import { Lesson } from './lesson.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  book: props.book,
		  index: this.props.index,
		  translation: '',
		};

		this.initTextarea = this.initTextarea.bind(this);
		this.handleBookChange = this.handleBookChange.bind(this);
		this.handleIndexChange = this.handleIndexChange.bind(this);
		this.handleTranslationChange = this.handleTranslationChange.bind(this);
	}

  handleBookChange(event, book) {
	  this.setState({ book: book, index: 0, translation: ''});
      this.textarea.value = '';
	}

  handleIndexChange(event, index) {
	  this.setState({ index: index, translation: ''});
		this.textarea.value = '';
	}
  
  handleTranslationChange() {
	this.setState({ translation: this.textarea.value });
  }

  initTextarea(textarea) {
	this.textarea = textarea;
  }

  render() {
	return <div className="flex flex-row">
      <LessonList book={ this.state.book } index={this.state.index} handleBookChange={this.handleBookChange} handleIndexChange={this.handleIndexChange}/>
	    <Lesson book={ this.state.book } index={ this.state.index } 
	      translation={ this.state.translation } 
	      initTextarea={this.initTextarea}
	      handleTranslationChange={this.handleTranslationChange}
	      handleIndexChange={this.handleIndexChange} />
	</div>
  }
}

ReactDOM.render(
  <App book={ NCE2 } index={0} />,
  document.getElementById('root')
);


