import React from 'react';
import { NCE1 } from './data/NCE1_utf8.js';
import { NCE2 } from './data/NCE2_utf8.js';
import { NCE3 } from './data/NCE3_utf8.js';
import { NCE4 } from './data/NCE4_utf8.js';

export class LessonList extends React.Component {
  constructor(props) {
	super(props);
	this.state = {
	  book: this.props.book,
	  index: this.props.index,
	};

	this.toggleSideList = this.toggleSideList.bind(this);
  }

  componentDidMount() {
	this.sideButton = document.getElementById('sidebutton');
	this.sideList = document.getElementById('sidelist');
	this.sideButton.addEventListener('click', (e) => this.toggleSideList());
  }

  toggleSideList() {
	  if(this.sideList.classList.contains('-translate-x-full')) {
		  this.sideButton.classList.innerHtml = 'x';
		  this.sideList.classList.remove('-translate-x-full');
		  this.sideButton.classList.remove('-right-10');
		  this.sideButton.classList.add('right-0');
	  } else {
		  this.sideButton.classList.innerHtml = '>';
		  this.sideList.classList.add('-translate-x-full');
		  this.sideButton.classList.add('-right-10');
		  this.sideButton.classList.remove('right-0');
	  }
  }

  render() {
	return <div id="sidelist" className="absolute w-full -translate-x-full md:translate-x-0 md:w-1/4 md:static md:basis-1/4 bg-stone-100 p2 transition-all ease-in-out delay-150 ">
	  <div className="relative">
	    <div id="sidebutton" className="absolute -right-10 md:hidden bg-green-600 hover:bg-green-400 w-10 h-10 leading-10 text-2xl text-center text-rose-200 hover:cursor-pointer">X</div>
	    <div className="p-2 border-b">
	      <a onClick={(e) => this.props.handleBookChange(e, NCE1)} className={this.props.book==NCE1 ? 'text-green-600 cursor-pointer pr-3' : 'cursor-pointer pr-3 tracking-loose'}>第1册</a>
	      <a onClick={(e) => this.props.handleBookChange(e, NCE2)} className={this.props.book==NCE2 ? 'text-green-600 cursor-pointer pr-3' : 'cursor-pointer pr-3 tracking-loose'}>第2册</a>
	      <a onClick={(e) => this.props.handleBookChange(e, NCE3)} className={this.props.book==NCE3 ? 'text-green-600 cursor-pointer pr-3' : 'cursor-pointer pr-3 tracking-loose'}>第3册</a>
	      <a onClick={(e) => this.props.handleBookChange(e, NCE4)} className={this.props.book==NCE4 ? 'text-green-600 cursor-pointer pr-3' : 'cursor-pointer pr-3 tracking-loose'}>第4册</a>
	    </div>
	    <ul>
          {
	        this.props.book.map(item => {
              return <li key={ item.id } className="py-1.5 tracking-loose">
	    	     <a onClick={(e) => {this.toggleSideList(); this.props.handleIndexChange(e, item.id)} } className={this.props.index==item.id ? 'hover:text-rose-600 text-rose-600' : 'hover:text-rose-600'}>
	    	       <span className="px-2">{ item.id }</span>
	    	       { item.title }
	    	     </a>
	    	   </li>
            })
	      }
        </ul>
      </div>
    </div>
  };
}
