import generateDocs from './generate-docs';
import { getOptions, showHelp } from './options';
import initTypescript from './typescript';

const { help, mzingaPath, configPath, outputPath, generatorOptions } = getOptions();

if (help) {
  showHelp();
} else {
  if (mzingaPath) {
    process.chdir(mzingaPath);
  }

  initTypescript();
  generateDocs(configPath, outputPath, generatorOptions).catch(error => {
    console.error(error);
    process.exit(1);
  });
}
