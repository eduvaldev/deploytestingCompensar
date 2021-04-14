import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/db/upload (POST)', () => {
    return request(app.getHttpServer()).post('/db/upload').expect(201);
  });

  it('/login (POST)', () => {
    return request(app.getHttpServer()).post('/login').expect(201);
  });
});
