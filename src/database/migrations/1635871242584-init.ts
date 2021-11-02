import {MigrationInterface, QueryRunner} from "typeorm";

export class init1635871242584 implements MigrationInterface {
    name = 'init1635871242584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "standart" TYPE numeric(10,3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "standart" TYPE numeric(10,2)`);
    }

}
