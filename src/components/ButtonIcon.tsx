import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ButtonIcon() {
  return (
    <Button
      variant='default'
      size='icon'
      className='bg-primary rounded-l-none py-[25px] rounded-r-xl w-12'
      type='submit'
      style={{ zIndex: 9999 }}
    >
      <ChevronRight className='h-4 w-4' />
    </Button>
  );
}

export default ButtonIcon;
