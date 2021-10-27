

export default function SignOutDialog({
    title,
    onDialogButtonClicked,
    isDialogOpened
}) {
    return (<>
        {isDialogOpened && <div className='dialog'>
            <div class="dialog-content">
                <h1 style={{ alignSelf: 'center' }}>{title}</h1>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <button className='button' style={{ backgroundColor: 'red', marginLeft: '1rem' }} onClick={() => onDialogButtonClicked("no")}>No</button>
                    <button className='button' style={{ backgroundColor: 'green', marginLeft: '1rem' }} onClick={() => onDialogButtonClicked("yes")}>Yes</button>
                </div>
            </div>
        </div>
        }
    </>
    )
}
