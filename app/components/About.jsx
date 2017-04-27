var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a weather application build on React. I have built this for
        The Complete React Web App Developer Course.
      </p>
      <h5><u>Here is some information about me</u></h5>
      <p>
        I graduated from the University of California, San Diego with a
        B.S. Electrical Engineering and my depth in Software Systems. I
        currently work at Greenlee Communications in Vista, California
        as an Electrical Engineer.
      </p>
      <a href='https://github.com/stanleyphu'>Github Profile</a>
    </div>
  );
};

module.exports = About;
