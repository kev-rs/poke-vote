import { useState } from 'react';
import { getOptionsForVote } from 'src/utils/getRandomPokemon';
import { trpc } from 'src/utils/trpc';
import { RootLayout } from '../components/layouts';
import Image from 'next/image';
// import * as imgs from '../assets/index';
// import clsx from 'clsx';
import { Loading } from '@ui';

const Home = () => {
  const [ isSelected, setStatus ] = useState(false);
  const [{ firstId, secondId }] = useState<{ firstId: number; secondId: number }>(() => getOptionsForVote());

  const firstPokemon = trpc.pokemon.getById.useQuery({ id: firstId });
  const secondPokemon = trpc.pokemon.getById.useQuery({ id: secondId });

  const handleVote = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.target.checked = !isSelected
    console.log(e);
    // setStatus(!isSelected);
  }

  return (
    <RootLayout>
      <h1 className="text-center">Vote</h1>
      <div className='flex justify-center items-center w-screen h-screen'>
        {
          !firstPokemon.data || !secondPokemon.data
            ? (
              <>
                <Loading position='left' />
                <Loading position='right' />
              </>
            )
            : (
              <div className='border rounded flex justify-center items-center'>
                <div>
                  <input type='radio' checked={isSelected} onClick={handleVote} />
                  <Image src={`${firstPokemon.data.sprites.front_default ?? ''}`} alt='first poke' width={100} height={100} priority />
                </div>
                <div className='text-white'>vs</div>
                <div>
                  <input type='radio' checked={isSelected} onChange={handleVote} />
                  <Image src={`${secondPokemon.data.sprites.front_default ?? ''}`} alt='second poke' width={100} height={100} priority />
                </div>
              </div>
            )
        }
      </div>
      {/* <Button onClick={handlePoke} /> */}
      {/* <Image src={`${res.data?.sprites.front_default}`} alt='pokemon' width={200} height={200} priority /> */}
      {/* <div className='grid grid-cols-3'>
        {
          // res.data?.results.map(poke => <div key={poke.url} className='text-white border-b'>-{poke.name}</div>)
        }
      </div> */}
    </RootLayout>
  );
};


export default Home;