import {useDispatch, useSelector} from "react-redux";
import {Container, Button} from "react-bootstrap";
import {increment, decrement} from './feature/counter/counterSlice';
import {useLayoutEffect} from "react";

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(increment())
    }
    const decrementHandler = () => {
        dispatch(decrement())
    }
    useLayoutEffect(() => {
        const progressBar = document.querySelector("#progress-bar");
        const error = document.querySelector("#error");
        progressBar.style.width = `${count * 10}px`;
        progressBar.style.maxWidth = '100%';
        if (count < 0) {
            error.innerHTML = "ERROR! Progress Bar doesn't work!";
            setTimeout(() => {
                error.innerHTML = "";
            }, 3000);
        } else if (count >= 0 && count < 60) {
            progressBar.classList.add("bg-success");
        } else if (count >= 60 && count < 90) {
            progressBar.classList.add("bg-warning")
        } else if (count >= 90 && count <= 130) {
            progressBar.classList.add("bg-danger")
        } else {
            error.innerHTML = "You reach the maximum!";
            setTimeout(() => {
                error.innerHTML = "";
            }, 3000)
        }
    }, [count]);

    return (
        <Container className="mx-auto">
            <h1 className="text-center mt-3 text-white mb-3 pb-3 border-bottom border-3">Counter APP</h1>
            <h3 className='text-center mt-4 p-4 text-bg-light mt-1 rounded-5 mx-auto fs-1'>{count}</h3>
            <div className="d-flex justify-content-evenly align-items-center mt-5">
                <Button onClick={() => incrementHandler()} style={{width: "200px", height: "50px"}}>Increase</Button>
                <Button onClick={() => decrementHandler()} style={{width: "200px", height: "50px"}}>Decrease</Button>
            </div>
            <div className="mx-auto mt-5 border border-2 rounded">
                <div className="rounded" id="progress-bar" style={{height: "50px"}}></div>
            </div>
            <h2 className="text-center text-bg-danger rounded mt-2" id="error"></h2>
        </Container>
    );
}

export default App;