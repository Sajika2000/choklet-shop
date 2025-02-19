import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Signup failed');

      const data = await res.json();
      console.log(data)
      setLoading(false);
      if(data.sucess === false){
        setError(true)
        return;
      }
     
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-[#ff6b00] text-[75px] font-bold mb-6 text-center my-7 italic">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Username" id="username" className="p-3 rounded-lg bg-slate-100" onChange={handleChange} />
        <input type="email" placeholder="Email" id="email" className="p-3 rounded-lg bg-slate-100" onChange={handleChange} />
        <input type="password" placeholder="Password" id="password" className="p-3 rounded-lg bg-slate-100" onChange={handleChange} />
        <button disabled={loading} className="p-3 text-white uppercase rounded-lg bg-[#42332f] hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : 'Sign-Up'}
        </button>
      </form>

      

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
      <p className='mt-5 text-red-700'>{error && 'Something went wrong'}</p>
    </div>
  );
};

export default Signup;
