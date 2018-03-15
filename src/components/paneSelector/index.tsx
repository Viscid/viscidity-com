import * as React from 'react';
import './paneSelector.css';

interface PaneSelectorProps {
    onSelect?: (n: number) => void;
    items: String[];
    width: number;
    color: string;
}

interface PaneSelectorState {
    selectedItem: number;
}

export default class PaneSelector extends React.Component<PaneSelectorProps, PaneSelectorState> {
    constructor(props: PaneSelectorProps) {
        super(props);
        this.state = { selectedItem: 0 };
    }

    render() {
        return (
            <div>
                <ul className="paneSelectorList">
                    {this.props.items.map((item, index) => {
                        return (
                        <li 
                            key={index} 
                            style={{width: (this.props.width / this.props.items.length) + 'px'}} 
                            className={'paneSelectorItem ' + this.isActive(index)}
                        >
                            <a onClick={() => this.selectItem(index)}> {item} </a>
                        </li>
                        );
                    })}                
                </ul>
                <div
                    className={'paneSelectorUnderline'}
                    style={{
                        background: this.calculateGradient(),
                        backgroundPositionX: this.calculateBackgroundOffset() + 'px',
                        width: this.props.width + 'px'}} 
                />
            </div>
        );
    }

    calculateGradient(): string {
        let gradientWidth = (100 / this.props.items.length);
        return `linear-gradient(to right,
            rgba(255, 255, 255, 0) 0%,
            ${this.props.color} 0%, 
            ${this.props.color} ${gradientWidth}%,
            rgba(255, 255, 255, 0) ${gradientWidth}%,
            rgba(255, 255, 255, 0) 100%)`;
    }

    calculateBackgroundOffset(): number {
        let step = this.props.width / this.props.items.length;
        return step * this.state.selectedItem;
    }

    selectItem(n: number): void {
        this.setState({ selectedItem: n });
        if (this.props.onSelect) { this.props.onSelect(n); }
    }

    isActive(n: number): string {
        return (this.state.selectedItem === n ? 'active' : '');
    }

    activeItem(): string {
        return 'active' + this.state.selectedItem;
    }

}