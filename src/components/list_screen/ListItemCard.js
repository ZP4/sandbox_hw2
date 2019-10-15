import React, { Component } from 'react'

export class ListItemCard extends Component {

    constructor(props) {
        super(props);

    }

    moveItemUp(event) {
        if(this.props.index === 0) {
            return false
        }
        else {
            this.props.itemUpFunc(this.props.listItem)
        }
    }

    moveItemDown(event) {
        if(this.props.index === this.props.todoList.length-1) {
            return false
        }
        else {
            this.props.itemDownFunc(this.props.listItem)
        }
    }

    itemDelete(event) {
        this.props.itemDeleteFunc(this.props.listItem)
    }

    render() {
        return (
            <div className='list_item_card'>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className='list_item_card_completed' style={this.props.listItem.completed ? completedGreen : completedRed}>
                    {this.props.listItem.completed ? "Completed" : "Pending"}
                </div>

                <div className='list_item_buttons'>
                    <div
                        className='list_item_card_move_up'
                        onClick= {this.moveItemUp.bind(this)}
                        disabled={this.props.index === 0}
                        style={this.props.index === 0 ? disabled : null }

                    >&#8679;</div>

                    <div
                        className='list_item_card_move_down'
                        onClick= {this.moveItemDown.bind(this)}
                        disabled={this.props.index === this.props.todoList.length-1}
                        style={this.props.index === this.props.todoList.length-1 ? disabled : null }
                    >&#8681;</div>

                    <div
                        className='list_item_card_delete'
                        onClick= {this.itemDelete.bind(this)}
                    >&#10006;</div>
                </div>
            </div>
        )
    }
}

const completedRed = {
    color: "red"
};

const completedGreen = {
    color: "green"
};

const disabled = {
    backgroundColor: '#929292'

};

export default ListItemCard
