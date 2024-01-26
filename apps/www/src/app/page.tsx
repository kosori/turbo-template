import type { NextPage } from 'next';
import { Loader2 } from 'lucide-react';

import { Button } from '@kosori/ui/Button';
import { ThemeToggle } from '@kosori/ui/theme';

const Page: NextPage = () => {
  return (
    <div>
      <div className='m-4 grid grid-cols-2 gap-6'>
        <Button intent='solid' variant='default'>
          <Loader2 /> Get Started
        </Button>
        <Button disabled intent='solid' variant='default'>
          <Loader2 /> Get Started
        </Button>

        <Button intent='soft' variant='default'>
          <Loader2 /> Get Started
        </Button>
        <Button disabled intent='soft' variant='default'>
          <Loader2 /> Get Started
        </Button>

        <Button intent='outline' variant='default'>
          <Loader2 /> Get Started
        </Button>
        <Button disabled intent='outline' variant='default'>
          <Loader2 /> Get Started
        </Button>

        <Button intent='ghost' variant='default'>
          <Loader2 /> Get Started
        </Button>
        <Button disabled intent='ghost' variant='default'>
          <Loader2 /> Get Started
        </Button>

        <Button intent='solid' variant='danger'>
          <Loader2 /> Get Started
        </Button>
        <Button disabled intent='solid' variant='danger'>
          <Loader2 /> Get Started
        </Button>

        <Button intent='soft' variant='danger'>
          <Loader2 /> Get Started
        </Button>
        <Button disabled intent='soft' variant='danger'>
          <Loader2 /> Get Started
        </Button>

        <Button intent='outline' variant='danger'>
          <Loader2 /> Get Started
        </Button>
        <Button disabled intent='outline' variant='danger'>
          <Loader2 /> Get Started
        </Button>

        <Button intent='ghost' variant='danger'>
          <Loader2 /> Get Started
        </Button>
        <Button disabled intent='ghost' variant='danger'>
          <Loader2 /> Get Started
        </Button>
        <div className='flex gap-x-4'>
          <Button size='small'>
            <Loader2 /> Get Started
          </Button>
          <Button size='medium'>
            <Loader2 /> Get Started
          </Button>
          <Button size='large'>
            <Loader2 /> Get Started
          </Button>
        </div>

        <div className='flex gap-x-4'>
          <Button icon size='small'>
            <Loader2 />
          </Button>
          <Button icon size='medium'>
            <Loader2 />
          </Button>
          <Button icon size='large'>
            <Loader2 />
          </Button>
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Page;
