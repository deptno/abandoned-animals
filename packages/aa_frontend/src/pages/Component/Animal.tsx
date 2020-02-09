import React, {useCallback, useMemo, useState} from 'react'
import {AbandonedAnimal} from '@deptno/aa_graphql_type'
import c from 'classnames'
import {AnimalInfo} from './AnimalInfo'
import {AdoptionInfo} from './AnoptionInfo'

type InfoType = 'animal' | 'adoption'

export const Animal: React.FunctionComponent<AbandonedAnimal> = props => {
  const [type, setType] = useState<InfoType>('animal')
  const showAnimalInfo = useCallback(() => setType('animal'), [])
  const showAdoptionInfo = useCallback(() => setType('adoption'), [])
  const animalInfoColor = useMemo(() => ({
    'white bg-blue': type === 'animal',
    'bg-black-10 black-30': type !== 'animal',
  }), [type])
  const adoptionInfoColor = useMemo(() => ({
    'white bg-blue': type === 'adoption',
    'bg-black-10 black-30': type !== 'adoption',
  }), [type])

  return (
    <div
      className="card relative flex flex-column bg-black-05 mv2"
      key={props.desertionNo!}
    >
      <style jsx>{/*language=css*/ `
        img {
          object-fit: scale-down;
        }
      `}</style>
      <div className="ph2">
        <figure className="flex items-center relative ma0 pa2 bg-black br2">
          <img
            className="o-90 h5 ml-auto mr-auto overflow-hidden bg-black br2"
            src={props.popfile!}
          />
        </figure>
      </div>
      <p className="flex items-center justify-end ma2 pa0 f6">
        <span
          className={c('br--left br2 dib lh-copy ph2 pointer', animalInfoColor)}
          onClick={showAnimalInfo}
        >
          동물 정보
        </span>
        <span
          className={c('br--right br2 dib lh-copy ph2 pointer', adoptionInfoColor)}
          onClick={showAdoptionInfo}
        >
          입양 정보
        </span>
      </p>
      {type === 'animal' && <AnimalInfo {...props} />}
      {type === 'adoption' && <AdoptionInfo {...props} />}
    </div>
  )
}

