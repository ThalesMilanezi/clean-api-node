export interface LogErrorRepository {
    log(stafck: string): Promise<void>
}