import React, {Component} from 'react';

class Paint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawing: false,

        }
        this.startDrawing = this.startDrawing.bind(this);
        this.stopDrawing = this.stopDrawing.bind(this);
        this.updateCanvas = this.updateCanvas.bind(this);
        this.draw = this.draw.bind(this);
    }
    updateCanvas() {
        this.context = this.canvas.getContext('2d');
        this.context.lineWidth = this.props.lineWidth;
        this.context.lineWidth = 'round';
        this.context.strokeStyle = this.props.strokeColor;
        this.context.stroke();
        this.context.beginPath();
    }
    componentDidMount(){
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    startDrawing(e) {
        if(!this.state.isDrawing) {
            this.setState({
                isDrawing: true
            });
        }
        this.context.moveTo(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
    }
    stopDrawing() {
        if(this.state.isDrawing) {
            this.setState({
                isDrawing: false
            });
        }
    }
    draw(e) {
        if(this.state.isDrawing) {
            this.context.lineTo(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
            this.context.stroke();
        }
    }
    getCanvasRef(el) {
        this.canvas = el;
    }
    render() {
        return (
            <div>
                <canvas 
                    ref={   (canvas)=> (this.canvas = canvas) }
                    width= {this.props.width}
                    height= {this.props.height}
                    onMouseDown={this.startDrawing}
                    onMouseUp={this.stopDrawing}
                    onMouseMove={this.draw}
                />
            </div>
        );
    }
}

export default Paint;