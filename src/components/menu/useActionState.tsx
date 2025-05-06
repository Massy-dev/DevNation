import { useState } from 'react';

 const useActionState = (action: () => any, initialState: any) => {
  const [state, setState] = useState(initialState);

  const formAction = async () => {
    try {
      setState({ ...state, loading: true });
      await action();
      setState({ ...state, success: true, error: false });
    } catch (err) {
      setState({ ...state, success: false, error: true });
    } finally {
      setState({ ...state, loading: false });
    }
  };

  return [state, formAction];
};

export default useActionState