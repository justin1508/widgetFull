export interface FeedbackCreateData {
	type: string;
	comment: string;
	screenshot?: string;
}

export interface FeedbacksRepository {
	// no javascript toda funcao assincrona é uma promise
	create: (data: FeedbackCreateData) => Promise<void>;
}