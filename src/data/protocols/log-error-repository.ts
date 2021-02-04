export interface LogErrorRepository {
    logError(stafck: string): Promise<void>
}