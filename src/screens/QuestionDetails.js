import appIcon from '../assets/app_icon.png'

export default function QuestionDetails(props) {

    const title = props.location.state.title
    console.log(props.location.state)

    // const remediesList = [
    //     {
    //         title: "Remedy 1"
    //     }, {
    //         title: "Remedy 2"
    //     }, {
    //         title: "Remedy 3"
    //     }, {
    //         title: "Remedy 4"
    //     }, {
    //         title: "Remedy 5"
    //     }, {
    //         title: "Remedy 6"
    //     }, {
    //         title: "Remedy 7"
    //     }
    // ]

    return (
        <div className="question-container">

            <div className="header">
                <img className='appIcon'
                    style={{ height: '3rem', width: '3rem' }}
                    src={appIcon} />
                Astro-Study Booster
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "2rem",
                marginRight: "2rem",
            }}>
                <h1 style={{ display: 'flex', color: 'white' }}>
                    Question Details</h1>

                <div className='actionButtonsContainer'>
                    <button className='button'>
                        {/* <TiIcons.TiTick /> */}
                        Take Over</button>

                    <button className='button' style={{ backgroundColor: 'green', marginLeft: '1rem' }}>
                        {/* <CgIcons.CgClose /> */}
                        Submit</button>

                    <button className='button' style={{ backgroundColor: 'red', marginLeft: '1rem' }}>
                        {/* <CgIcons.CgClose /> */}
                        Cancel</button>
  
                </div>
                {/* <p className='label'>Question</p> */}
                <p className='belowLabel'>{title}</p>
                {/* <p className='label'>Answer</p> */}
                <textarea className='answer'
                    type="text"
                    id="answer"
                    name="answer"
                    placeholder='Enter your answer/suggestions here'
                    rows='10' />
                {/* <p className='label'>Remedies</p> */}
                <textarea className='answer'
                    type="text"
                    id="remedies"
                    name="remedies"
                    placeholder='Enter Remedies here'
                    rows='10' />
            </div>

            {/* <div className='checkboxContainer'>
                {
                    remediesList.map((value, index) => (
                        <div className="checkBoxItem" key={index}>
                            <input type="checkbox" id={value} name={value} value={value} />{value.title}
                        </div>
                    ))
                }
            </div> */}


        </div>

    )
}