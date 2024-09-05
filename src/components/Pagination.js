import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination({handlePrev , handleNext , pageNo, useCache}) {
    return (
      <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
          {pageNo != 1 && useCache==false && <div onClick={handlePrev}  className='px-8'> <FontAwesomeIcon icon={faArrowLeft} /></div>}
          <div className='font-bold'>{pageNo}</div>
          {useCache==false && <div onClick={handleNext}  className='px-8'><FontAwesomeIcon icon={faArrowRight} /></div>}
      </div>
    );
  }
  
  