import { Command } from 'commander';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';

console.log(figlet.textSync("Delly Cli"));

const program = new Command();
program
  .name('delly')
  .version('1.0.0')
  .description("Delly's project generator cli")
  .option('-h, --help', 'Display help')
  .command('create', 'Create a new project')
  .alias('c')
  .parse(process.argv);
// 프로그램 옵션 가져오기 
const options = program.opts();


if (options.create) {
  createProjectsDir();
}



/**
 * 프로제트 구조 생성
 *
 * @async
 * @returns {Promise<void>}
 */
async function createProjectsDir() {
  const folders = ['Controller', 'router', 'Util', 'Database', 'Mapper'];

  for (const folder of folders) {
    const folderPath = path.join(__dirname, folder);

    try {
      await fs.promises.mkdir(folderPath);


    } catch (error) {
      console.error(`Failed to create ${folder} folder: ${error}`);
    }
  }
}


/**
 * 디렉토리 생성
 *
 * @async
 * @param  path - 생성할 디렉토리 경로
 * @returns {*}
 */
async function createDir(path: string) {
  try {
    await fs.promises.mkdir(path);
    console.log(`Created ${path} folder.`);
  } catch (error) {
    console.error(`Failed to create ${path} folder: ${error}`);
  }
}

async function createController(name: string) {
  const controllerPath = path.join(__dirname, 'Controller',);

}

