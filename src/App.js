import './App.css';

function App() {
    return (
        // <div className={"App"}>
        //     <div className={"main"}>
        //         <div className={'top-header'}>Header</div>
        //         <div className={'content-box d-flex flex-row flex-grow-1'}>
        //             <div className={'info-box'}>INFORMATION box</div>
        //             <div className={'d-flex flex-grow-1 flex-column'}>
        //                 <div className={'timer-box'}>Timer box</div>
        //                 <div className={'payment-box'}>Payment block</div>
        //             </div>
        //         </div>
        //         <div className={'footer'}>Footer</div>
        //     </div>
        // </div>
        <div className={"App"}>
            <div className={"main"}>
                <div className={'top-header col-12'}>Header</div>
                <div className={'row d-flex flex-grow-1'}>
                    <div className={'info-box p-0 col-6'}>INFORMATION box</div>
                    <div className={'col-6 p-0 d-flex flex-column'}>
                        <div className={'timer-box flex-grow-1'}>
                            <div className={'custom-timer d-flex justify-content-center align-items-center'}>
                                <div className={'clock-item'}></div>
                                <div className={'clock-item'}></div>
                                <div className={'clock-item'}></div>
                                <div className={'clock-item'}></div>
                                <div className={'clock-item'}></div>
                                <div className={'clock-item'}></div>
                            </div>
                        </div>
                        <div className={'payment-box flex-grow-1'}>Payment block</div>
                    </div>
                </div>
                <div className={'footer'}>Footer</div>
            </div>
        </div>
    );
}

export default App;
