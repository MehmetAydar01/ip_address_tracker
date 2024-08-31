import { FormInput, ButtonIcon } from '.';

type SearchLocationProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function SearchLocation({ handleSubmit }: SearchLocationProps) {
  return (
    <div className='bgImage'>
      <h1 className='capitalize text-4xl text-background w-full text-center pt-8 font-semibold'>
        ip address tracker
      </h1>
      <form
        onSubmit={handleSubmit}
        className='max-w-xl flex justify-center items-center mx-auto px-4 pb-32 mt-10'
      >
        {/* SEARCH INPUT */}
        <FormInput
          type='text'
          name='search'
          defaultValue=''
          placeholder='Search for any IP address or domain'
        />

        {/* BUTTON */}
        <ButtonIcon />
      </form>
    </div>
  );
}

export default SearchLocation;
