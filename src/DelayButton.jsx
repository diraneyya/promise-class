import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DelayButton(props) {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function clickHandler() {
    try {
      const response = await axios.get(
        "https://backend-bad-connection.glitch.me/?can_fail&min_delay=0&delay_range=5000"
      );

      setError(false);
      props.setDelay(response.data.delay);
      navigate('/delay/' + response.data.delay);
      
    } catch {
      setError(true);
    }
  }

  return (
    <button
      onClick={clickHandler}
      style={error ? { backgroundColor: "red" } : {}}
    >
      random delay is {props.delay}
    </button>
  );
}
