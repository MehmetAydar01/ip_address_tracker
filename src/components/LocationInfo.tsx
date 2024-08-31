import type { GeoApiResponse } from '@/types';

type LocationInfoProps = {
  data: GeoApiResponse[];
};

function LocationInfo({ data }: LocationInfoProps) {
  return (
    <section
      className='w-full h-[32rem] absolute top-0 left-0'
      style={{ zIndex: 999 }}
    >
      <div className='max-w-4xl bg-background mt-52 mx-5 lg:mx-auto rounded-xl p-6 grid gap-y-3 md:gap-y-0 md:grid-cols-4 justify-center md:justify-start'>
        <div className='md:border-r-2 md:ml-0'>
          <h4 className='text-sm md:text-base text-muted-foreground uppercase font-semibold text-center md:text-start'>
            ip address
          </h4>
          <h3 className='font-bold text-foreground text-center md:text-start text-lg md:text-xl mb-4 mt-2'>
            {data[0]?.ip}
          </h3>
        </div>

        <div className='md:border-r-2 md:ml-6'>
          <h4 className='text-sm md:text-base text-muted-foreground uppercase font-semibold text-center md:text-start'>
            location
          </h4>
          <h3 className='font-bold text-foreground text-center md:text-start text-lg md:text-xl mb-4 mt-2'>
            {data[0]?.location.city ? data[0]?.location.city + ',' : ''}
            {data[0]?.location.country}
            <span className='block'>
              {data[0]?.location.postalCode && data[0]?.location.postalCode}
            </span>
          </h3>
        </div>

        <div className='md:border-r-2 md:ml-6'>
          <h1 className='text-sm md:text-base text-muted-foreground uppercase font-semibold text-center md:text-start'>
            timezone
          </h1>
          <h3 className='font-bold text-foreground text-center md:text-start text-lg md:text-xl mb-4 mt-2'>
            UTC {data[0]?.location.timezone}
          </h3>
        </div>

        <div className='md:ml-6'>
          <h1 className='text-sm md:text-base text-muted-foreground uppercase font-semibold text-center md:text-start'>
            isp
          </h1>
          <h3 className='font-bold text-foreground text-center md:text-start text-lg md:text-xl mb-4 mt-2'>
            {data[0]?.isp
              ? data[0]?.isp
              : data[0]?.location.lat == 0 && data[0]?.location.lng == 0
              ? ''
              : 'SPACEX STARLINK'}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default LocationInfo;
