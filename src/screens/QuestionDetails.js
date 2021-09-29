import * as TiIcons from 'react-icons/ti'
import * as CgIcons from 'react-icons/cg'


export default function QuestionDetails(props) {

    const title = props.location.state.title
    console.log(props.location.state)

    const remediesList = [
        {
            title: "Remedy 1"
        }, {
            title: "Remedy 2"
        }, {
            title: "Remedy 3"
        }, {
            title: "Remedy 4"
        }, {
            title: "Remedy 5"
        }, {
            title: "Remedy 6"
        }, {
            title: "Remedy 7"
        }
    ]
    return (
        <div className="question-container">


            <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                Question Details</h1>

            <div className='actionButtonsContainer'>
                <button className='button'>
                    {/* <TiIcons.TiTick /> */}
                    Accept</button>

                <button className='button' style={{ backgroundColor: 'red' }}>
                    {/* <CgIcons.CgClose /> */}
                    Decline</button>
            </div>
            <p className='label'>Question</p>
            <p className='belowLabel'>{title}</p>
            <p className='label'>Answer</p>
            <textarea className='answer'
                type="text"
                id="answer"
                name="answer"
                placeholder='Enter your answer/suggestions here'
                rows='10' />
            <p className='label'>Remedies</p>
            <div className='checkboxContainer'>
                {
                    remediesList.map((value, index) => (
                        <div className="checkBoxItem" key={index}>
                            <input type="checkbox" id={value} name={value} value={value} />{value.title}
                        </div>
                    ))
                }
            </div>


        </div>

    )
}