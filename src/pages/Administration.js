import React from 'react'

const Administration = () => {
	return (
		<div className='layout__container'>
			<div className='layout__content main-content'>
				<div id='app'>
					<h1 className='heading__title'>
						Оформите подписку на администрирование
					</h1>
					<div className='start-page'>
						<div className='description'>
							Делегируйте работы по обслуживанию и сопровождению ваших облачных
							серверов нашим техническим экспертам
						</div>
						<ul className='list'>
							<li className='list__item'>
								Мониторинг, резервное копирование, установка обновлений и
								реагирование на инциденты
							</li>
							<li className='list__item'>
								Формирование и реализация плана по модернизации инфраструктуры
							</li>
							<li className='list__item'>
								Проактивный аудит периметра безопасности
							</li>
						</ul>
					</div>
					<a href='/server/info' className='btn btn-primary btn-lg empty__btn'>
						Оформить подписку
					</a>
				</div>
			</div>
		</div>
	)
}

export default Administration
