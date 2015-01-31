(function(){var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_available_for_project["it"] = ["Italian","Italiano"];
if(_.isUndefined(TAPi18n.translations["it"])) {
  TAPi18n.translations["it"] = {};
}

if(_.isUndefined(TAPi18n.translations["it"][namespace])) {
  TAPi18n.translations["it"][namespace] = {};
}

_.extend(TAPi18n.translations["it"][namespace], {"menu":"Menu","top":"Migliori","new":"Nuovi","digest":"Selezione","users":"Utenti","settings":"Impostazioni","admin":"Admin?","post":"Posta","toolbox":"Toolbox","sign_up_sign_in":"Registrati/Accedi","my_account":"Il Mio Account","view_profile":"Vedi Profilo","edit_account":"Modifica Account","new_posts":"Nuovi Posts","your_comment_has_been_deleted":"Il tuo commento è stato rimosso.","comment_":"Commenta","delete_comment":"Elimina Commento","add_comment":"Aggiungi Commento","upvote":"promuovi","downvote":"sconsiglia","link":"link","edit":"Modifica","reply":"Rispondi","no_comments":"Nessun commento.","you_are_already_logged_in":"Hai già eseguito l'accesso","sorry_this_is_a_private_site_please_sign_up_first":"Ci spiace, questo è un sito privato. Per favore registrati.","thanks_for_signing_up":"Grazie per esserti registrato!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Questo sito al momento è solo per chi è stato invitato, ma ti faremo sapere non appena ci sarà la possibilità di accedere.","sorry_you_dont_have_the_rights_to_view_this_page":"Ci spiace, non hai i permessi per visualizzare questa pagina.","not_found":"Non Trovato!","were_sorry_whatever_you_were_looking_for_isnt_here":"Ci spiace; qualsiasi cosa stessi cercando non è qua..","no_notifications":"Nessuna notifica","1_notification":"1 notifica","notifications":"notifiche","mark_all_as_read":"Segna tutte come lette","your_post_has_been_deleted":"Il tuo post è stato rimosso.","created":"Creato","title":"Titolo","suggest_title":"Titolo suggerito","url":"URL","short_url":"URL breve","body":"Corpo","category":"Categoria","inactive_":"Inattivo?","sticky_":"Persistente?","submission_date":"Data di Invio","submission_time":"Ora di Invio","date":"Data","submission":"Invio","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Nota: questo post è ancora in attesa quindi non ha ancora una data di invio.","user":"Utente","status_":"Stato","approved":"Approvato","rejected":"Rifiutato","delete_post":"Elimina Post","thanks_your_post_is_awaiting_approval":"Grazie, il tuo post è in attesa di approvazione.","sorry_couldnt_find_a_title":"Ci spiace, non riusciamo a trovare un titolo...","please_fill_in_an_url_first":"Per favore riempi prima l'URL!","share":"Condividi","discuss":"Discuti","upvote_":"Promuovi","sticky":"Persistente","status":"stato","votes":"voti","basescore":"punteggioBase","score":"punteggio","clicks":"clicks","views":"views","inactive":"inattivo","comment":"commento","comments":"commenti","point":"punto","points":"punti","please_complete_your_profile_below_before_continuing":"Per favore completa il tuo profilo qua sotto prima di proseguire.","account":"Account","username":"Nome Utente","display_name":"Nome Visualizzato","email":"Email","bio":"Bio:","password":"Password","change_password":"Cambio Password?","old_password":"Vecchia Password","new_password":"Nuova Password","email_notifications":"Notifiche via Email","comments_on_my_posts":"Commenti ai miei post","replies_to_my_comments":"Risposte ai miei commenti","forgot_password":"Password dimenticata?","profile_updated":"Profilo aggiornato","please_fill_in_your_email_below_to_finish_signing_up":"Per favore inserisci qua sotto la tua email per completare la registrazione.","invite":"Invita","uninvite":"Annulla l'invito","make_admin":"Rendi amministratore","unadmin":"Annulla amministratore","delete_user":"Elimina Utente","are_you_sure_you_want_to_delete":"Sei sicuro di voler eliminare ","reset_password":"Reimposta Password","password_reset_link_sent":"Link per reimpostare la password inviato!","name":"Name:","posts":"Post","comments_":"Commenti","karma":"Karma","is_invited":"È Invitato?","is_admin":"È Amministratore?","delete":"Elimina","member_since":"Membro dal","edit_profile":"Modifica profilo","sign_in":"Accedi","sign_in_":"Accedi!","sign_up_":"Registrati!","dont_have_an_account":"Non hai un account?","already_have_an_account":"Hai già un account?","sign_up":"Registrati","please_fill_in_all_fields":"Per favore compila tutti i campi","invite_":"Invita ","left":" sinistra","invite_none_left":"Invita (nessuno rimasto)","all":"Tutti","invited":"Invited?","uninvited":"Non invitati","filter_by":"Filtra per","sort_by":"Ordina per","sorry_you_do_not_have_access_to_this_page":"Ci spiace, non hai accesso a questa pagina","please_sign_in_first":"Per favore prima accedi.","sorry_you_have_to_be_an_admin_to_view_this_page":"Ci spiace, devi essere un amministratore per vedere questa pagina.","sorry_you_dont_have_permissions_to_add_new_items":"Ci spiace, non hai i permessi per aggiungere nuovi elementi.","sorry_you_cannot_edit_this_post":"Ci spiace, non puoi modificare questo post.","sorry_you_cannot_edit_this_comment":"Ci spiace, non puoi modificare questo commento.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Devi accedere ed essere un amministratore per aggiungere una nuova categoria.","you_need_to_login_or_be_invited_to_post_new_comments":"Devi accedere od essere invitato per postare nuovi commenti.","please_wait":"Per favore attendi ","seconds_before_commenting_again":" secondi prima di fare un altro commento","your_comment_is_empty":"Il tuo commento è vuoto.","you_dont_have_permission_to_delete_this_comment":"Non hai i permessi per eliminare questo commento.","you_need_to_login_or_be_invited_to_post_new_stories":"Devi accedere o essere invitato per postare nuove storie.","please_fill_in_a_headline":"Per favore inserisci un titolo","this_link_has_already_been_posted":"Questo link è già stato postato","sorry_you_cannot_submit_more_than":"Ci spiace, non puoi inviare più di ","posts_per_day":" post al giorno","someone_replied_to_your_comment_on":"Qualcuno ha risposto al tuo commento su","has_replied_to_your_comment_on":" ha risposto al tuo commento su","read_more":"Leggi di più","a_new_comment_on_your_post":"Un nuovo commento sul tuo post","you_have_a_new_comment_by":"Hai un nuovo commento di ","on_your_post":" sul tuo post","has_created_a_new_post":" ha creato un nuovo post","your_account_has_been_approved":"Il tuo account è stato approvato.","welcome_to":"Benvenuto a ","start_posting":"Inizia a postare.","please_fill_in_a_title":"Please fill in a title","seconds_before_posting_again":" seconds before posting again","upvoted":"Upvoted","posted_date":"Posted Date","posted_time":"Posted Time","profile":"Profile","sign_out":"Sign Out","invitedcount":"InvitedCount","invites":"Invites","actions":"Actions","invites_left":"invites left","id":"ID","github":"GitHub","site":"Site","upvoted_posts":"Upvoted Posts","downvoted_posts":"Downvoted Posts","mark_as_read":"Mark as read","pending":"In attesa","loading":"Caricamento...","submit":"Invia","you_must_be_logged_in":"Devi effettuare l'accesso.","are_you_sure":"Sei sicuro?","please_log_in_first":"Per favore esegui prima l'accesso","sign_in_sign_up_with_twitter":"Accedi/Registrati con Twitter","load_more":"Carica altro"});

})();
