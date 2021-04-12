import React, { useState } from 'react'

const CreateBtn = () => {
	const [optionList, setoOptionList] = useState(false)

	const showOptionList = () => setoOptionList(!optionList)

	return (
		<div className='aside__options'>
			<button className='btn btn--options' onClick={showOptionList}>
				Создать
			</button>
			<div className='option__list-wrapper'>
				<ul
					className={
						optionList ? `options__list options__list-active` : `options__list`
					}
				>
					<li className='options__item'>
						<a href='/server/info' className='option__link'>
							Создать сервер
						</a>
					</li>
					<li className='options__item'>
						<a href='/server/info' className='option__link'>
							Добавить сеть
						</a>
					</li>
					<li className='options__item'>
						<a href='/server/info' className='option__link'>
							Создать 1С базу
						</a>
					</li>
					<li className='options__item'>
						<a href='/server/info' className='option__link'>
							Перенести домен
						</a>
					</li>
					<li className='options__item'>
						<a href='/server/info' className='option__link'>
							Активировать хранилище
						</a>
					</li>
					<li className='options__item'>
						<a href='/server/info' className='option__link'>
							Заказать SSL-сертификат
						</a>
					</li>
					<li className='options__item'>
						<a href='/server/info' className='option__link'>
							Подключить мониторинг
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default CreateBtn
