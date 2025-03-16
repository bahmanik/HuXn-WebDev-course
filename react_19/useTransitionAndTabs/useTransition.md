useTransition: A React hook that lets you mark state updates as low-priority, keeping the UI responsive during expensive updates.

Example:

import { useState, useTransition } from 'react';

function ExampleComponent() {
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    startTransition(() => {
      setInputValue(newValue);
    });
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      {isPending && <p>Updating...</p>}
    </div>
  );
}

