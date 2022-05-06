
import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import otherImage from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
	BUG: {
		title: 'Problema',
		image: {
			source: bugImage,
			alt: 'Imagem representando um problema'
		}
	},
	IDEA: {
		title: 'Ideia',
		image: {
			source: ideaImage,
			alt: 'Imagem representando uma ideia'
		}
	},
	OTHER: {
		title: 'Outro',
		image: {
			source: otherImage,
			alt: 'Imagem representando outra opção'
		}
	},
}

// Object.entries(feedbackTypes)=>

/**
 * [
 *  ['BUG': {...}],
 *  ['IDEA': {...}],
 *  ['OTHER': {...}],
 * ]
 */

//type FeedbackType = typeof feedbackTypes;
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	function handleRestartFeedback() {
		setFeedbackSent(false);
		setFeedbackType(null);
	}

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{feedbackSent ? (
				<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
					) : (
						<FeedbackContentStep
							feedbackType={feedbackType}
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}


			<footer className="text-xs text-neutral-400">
				Feito com S2 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
			</footer>
		</div>
	)
}