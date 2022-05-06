
import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

import { PrismaFeedbacksRepository } from './repositories/primas/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

// app.get('/users', (req, res) => {
// 	return res.send('hello world')
// })

routes.post('/feedbacks', async (req, res) => {
	console.log(req.body)
	const { type, comment, screenshot } = req.body;

	const prismaFeedbackRepository = new PrismaFeedbacksRepository();
	const nodemailerMailAdapter = new NodemailerMailAdapter();

	const submitFeedbackUseCase = new SubmitFeedbackUseCase(
		prismaFeedbackRepository,
		nodemailerMailAdapter
	);

	await submitFeedbackUseCase.execute({
		type,
		comment,
		screenshot
	})

	// return res.send('hello world')
	// return res.status(201).json({ data: feedback });
	return res.status(201).send();
})