import Weather from '../Weather/Weather';
import Todo from '../Todo/todo';
import News from '../News/News';

const Widgets = (props) => {
    return (
        <div id="widgets">
            <Weather />
            <Todo />
            <News />
        </div>
    );
};

export default Widgets;
