const IPTracker = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center bg-blue-100 min-h-screen'>
      {/* Search Bar */}
      <div className='absolute top-5 w-full max-w-md mx-auto px-4'>
        <input
          type='text'
          placeholder='Search for any IP address or domain'
          className='w-full p-4 rounded-md shadow-md'
        />
      </div>

      {/* Info Card */}
      <div className='bg-white shadow-md rounded-md p-8 mt-20 lg:mt-0 lg:ml-10 text-center'>
        <div className='flex flex-col space-y-4'>
          <div>
            <h2 className='text-lg font-semibold'>IP ADDRESS</h2>
            <p className='text-2xl font-bold'>192.212.174.101</p>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>LOCATION</h2>
            <p className='text-2xl font-bold'>Brooklyn, NY 10001</p>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>TIMEZONE</h2>
            <p className='text-2xl font-bold'>UTC -05:00</p>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>ISP</h2>
            <p className='text-2xl font-bold'>SpaceX Starlink</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className='relative w-full h-96 lg:w-1/2 mt-10 lg:mt-0'>
        <img
          src='map-image.jpg' // Burada harita görüntünüzün yolunu koyun
          alt='Map'
          className='w-full h-full object-cover rounded-md shadow-md'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='bg-black text-white p-2 rounded-full'>
            <span className='material-icons'>location_on</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default IPTracker;
