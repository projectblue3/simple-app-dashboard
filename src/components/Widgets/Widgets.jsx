import Weather from '../Weather/Weather';
import Todo from '../Todo/todo';

const Widgets = (props) => {
    return (
        <div id="widgets">
            <Weather />
            <Todo />
        </div>
    );
};

export default Widgets;
