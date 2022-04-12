/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    INSERT INTO public.states (stateName,stateCode,countryId) VALUES
      ('Acre','AC',1),
      ('Alagoas','AL',1),
      ('Amazonas','AM',1),
      ('Amapá','AP',1),
      ('Bahia','BA',1),
      ('Ceará','CE',1),
      ('Distrito Federal','DF',1),
      ('Espírito Santo','ES',1),
      ('Goiás','GO',1),
      ('Maranhão','MA',1),
      ('Minas Gerais','MG',1),
      ('Mato Grosso do Sul','MS',1),
      ('Mato Grosso','MT',1),
      ('Pará','PA',1),
      ('Paraíba','PB',1),
      ('Pernambuco','PE',1),
      ('Piauí','PI',1),
      ('Paraná','PR',1),
      ('Rio de Janeiro','RJ',1),
      ('Rio Grande do Norte','RN',1),
      ('Rondônia','RO',1),
      ('Roraima','RR',1),
      ('Rio Grande do Sul','RS',1),
      ('Santa Catarina','SC',1),
      ('Sergipe','SE',1),
      ('São Paulo','SP',1),
      ('Tocantins','TO',1);
  `)
};

exports.down = pgm => {
};
