import React from 'react';

export class Lesson extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
		  show_english: false,
		};

		this.textarea = React.createRef();

		this.handleShowEnglish = this.handleShowEnglish.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.handlePre = this.handlePre.bind(this);
	}

  componentDidMount() {
	  this.props.initTextarea(this.textarea.current);
  }
  

  getLesson() { 
		return this.props.book[this.props.index];
	}

  // event handlers

  handleShowEnglish(event) {
		this.setState({ show_english: !this.state.show_english });
	}

  handleNext(event) {
		this.textarea.current.value = '';
		this.props.handleIndexChange(event, this.props.index+1);
	}

  handlePre(event) {
		this.textarea.current.value = '';
		this.props.handleIndexChange(event, this.props.index-1);
	}

  render() {
		return <div className="basis-full md:basis-3/4 p-4">
		  <div className="text-2xl font-bold text-green-600 text-center py-4">
			<span className="pr-6">Lesson { this.getLesson().id }.</span>
			{ this.getLesson().title }
		  </div>
		  <div className="chinese indent-8 leading-loose tracking-wider py-2" dangerouslySetInnerHTML={{__html: this.getLesson().chinese}}></div>
		  <div className="english leading-relaxed tracking-wider py-2">
				<p className="text-green-600 cursor-default" onClick={ this.handleShowEnglish }>
					{ this.state.show_english ? '隐藏原文' : '显示原文'}
				</p>
				<p className="indent-8" dangerouslySetInnerHTML={{__html: this.state.show_english ? this.getLesson().english : ''}}></p>
		  </div>
		  <div className="leading-relaxed tracking-wider py-2">
				<p className="text-green-600">你的翻译</p>
				<p className="text-rose-600 break-words whitespace-pre">{ this.props.translation }</p>
			</div>
		  <div className="">
				<textarea className="outline-none border-b border-green-600 w-full h-28" onChange={this.props.handleTranslationChange } ref={this.textarea} />
			</div>
		  <div className="text-center mt-2">
		    <button className="text-green-600 mr-8 disabled:text-gray-400" onClick={this.handlePre} disabled={ this.props.index <= 0}>上一篇</button>
		    <button className="text-green-600 mr-8 disabled:text-gray-400" onClick={this.handleNext} disabled={ this.props.index >= this.props.book.length-1 }>下一篇</button>
			</div>
		</div>
	}
}

