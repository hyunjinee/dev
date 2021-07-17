import {Entity, BaseEntity, Column, PrimaryColumn} from 'typeorm'

@Entity('Banker')
export class Banker extends BaseEntity {
    @PrimaryColumn()
    id: number


}

// 상속을 사용해서 ㅂ같은 컬럼 중복제거가능