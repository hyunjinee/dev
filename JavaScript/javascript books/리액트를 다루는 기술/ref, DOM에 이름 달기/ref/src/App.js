
import ScrollBox from './ScrollBox';
import React, { Component } from 'react';
class App extends Component {
	render() {
		return (
			<div>
				<ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        {/* <button onClick={()=> this.scrollBox.scrollToBottom()}>맨 밑으롱</button> */}
        {/* <button onClick={this.scrollBox.scrollToBottom}/> */}
			</div>
		);
	}
}
export default App;
