import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";
interface FeedbackTypeStepProps {
	onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
	return (
		<>
			<header>
				<span className="text-xl leanding-6">Deixe seu feedback</span>
				<CloseButton />
			</header>

			<div className="flex py-8 gap-2 w-full">
				{Object.entries(feedbackTypes).map(([key, value]) => {
					return (
						// py em cima e em baixo
						// flex-1 ajusta de acorco com o elemento externo, mas este tem q ser flex
						<button
							key={key}
							className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
							type="button"
							onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
						>
							<img src={value.image.source} alt={value.image.alt} />
							<span>{value.title}</span>
						</button>
					)
				})}
				{/* {Object.entries(feedbackTypes).map((item) => { */}

				{/* item1 pega a chave
item2 pega o valor */}
			</div>
		</>
	)
}