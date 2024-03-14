import React, { Component } from 'react'

//icons
import { AiOutlineClose } from 'react-icons/ai'

export class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      component: null,
      title: null
    }

  }
  showModal = (component, title) => {
    this.setState({
      show: true,
      component: component,
      title: title
    })
    console.log(this.state.component)
  }
  hideModal = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <>
        {this.state.show ?
          <div className='modal-wrapper flex-c'>
            <div className="modal">
              <div className="p-2 border-b flex-b">
                <p className='h3 text-gray-400 capitalize'>{this.state.title}</p>
                <AiOutlineClose onClick={this.hideModal} className='w-4 h-4' />
              </div>
              <div className="p-2">
                {this.state.component}
              </div>
            </div>

          </div>
          :
          <></>
        }
      </>
    )
  }
}

export default Modal
