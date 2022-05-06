import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

//spies-> obriga dar erro qnd nos testes comparando com as regras de negocios

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
	{ create: createFeedbackSpy },
	{ sendMail: sendMailSpy },
)

// test('sum 2 + 2', () => {
// 	expect(2 + 2).toBe(4);
// })

describe('Submit feedback', () => {
	it('should be able to submit a feedback', async () => {
		await expect(submitFeedback.execute({
			type: 'BUG',
			comment: 'example comment',
			screenshot: 'data:image/png;base64',
		})).resolves.not.toThrow();

		expect(createFeedbackSpy).toHaveBeenCalled();
		expect(sendMailSpy).toHaveBeenCalled();
	})

	it('should not be able to submit a feedback without a type', async () => {
		await expect(submitFeedback.execute({
			type: '',
			comment: 'example comment',
			screenshot: 'data:image/png;base64',
		})).rejects.toThrow();
	})

	it('should not be able to submit a feedback without a comment', async () => {
		await expect(submitFeedback.execute({
			type: 'BUG',
			comment: '',
			screenshot: 'data:image/png;base64',
		})).rejects.toThrow();
	})

	it('should not be able to submit a feedback without an invalid image', async () => {
		await expect(submitFeedback.execute({
			type: 'BUG',
			comment: 'example comment',
			screenshot: 'test.jpg',
		})).rejects.toThrow();
	})
})