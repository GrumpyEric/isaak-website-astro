import { FiMenu } from 'react-icons/fi'

type Props = {
  animateHeader: boolean
}

function BurgerMenu({ animateHeader }: Props) {
  return (
    <div className='mobile:visible desktop:hidden mobile:w-1/3 mobile:flex'>
      <FiMenu 
        size={'4vb'}
        className={`transition ease-in-out duration-200 cursor-pointer
        ${
          animateHeader 
            ? 'text-text hover:text-white'
            : 'text-white hover:text-text'
        }
      `}
      ></FiMenu>
    </div>
  )
}

export default BurgerMenu