import { container } from 'tsyringe'

import '@modules/users/providers/index'
import './providers'

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'

import TechsRepository from '@modules/techs/infra/typeorm/repositories/TechsRepository'
import ITechsRepository from '@modules/techs/repositories/ITechRepository'

import WorksRepository from '@modules/works/infra/typeorm/repositories/WorksRepository'
import IWorksRepository from '@modules/works/repositories/IWorksRepository'

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository)

container.registerSingleton<ITechsRepository>('TechsRepository', TechsRepository)

container.registerSingleton<IWorksRepository>('WorksRepository', WorksRepository)
