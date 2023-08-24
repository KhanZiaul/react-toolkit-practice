const App = () => {
  return (
    <div className='h-[50vh] flex justify-center items-center'>
      <div>
        <h2 className='text-4xl font-semibold mb-4'>Increment/Decrement Counter</h2>
        <p className='text-xl font-semibold text-center'>using redux-toolkit</p>
        <div className='flex justify-center items-center mt-7 gap-5'>
          <button className='btn font-bold'>-</button>
          <p className='font-bold text-xl'></p>
          <button className='btn font-bold'>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;