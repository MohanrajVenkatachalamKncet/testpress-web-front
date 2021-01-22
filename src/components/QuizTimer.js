import React from 'react'

export default function QuizTimer() {
  const [seconds, setSeconds] = React.useState(30);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 30000);
    } else {
      setSeconds('Timer Complete');
    }
  });

  return (
    <div>
      <div>
        {seconds}
      </div>
    </div>
  );
}
